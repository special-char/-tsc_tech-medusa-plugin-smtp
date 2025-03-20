import {
  AbstractNotificationProviderService,
  MedusaError,
} from "@medusajs/framework/utils";
import {
  ProviderSendNotificationDTO,
  ProviderSendNotificationResultsDTO,
  Logger,
} from "@medusajs/framework/types";
import nodemailer, { SendMailOptions, Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

type ProviderOptions = {
  fromEmail: string;
  transport: Parameters<typeof nodemailer.createTransport>[0];
  emailTemplatePath: string;
  html_templates: Record<
    string,
    {
      subject?: string;
      content: string;
    }
  >;
};

type InjectedDependencies = {
  logger: Logger;
};

class NotificationService extends AbstractNotificationProviderService {
  static identifier = "notification-smtp";
  private transporter: Transporter<
    SMTPTransport.SentMessageInfo,
    SMTPTransport.Options
  >;
  private options: ProviderOptions;
  private logger: Logger;

  constructor({ logger }: InjectedDependencies, options: ProviderOptions) {
    super();
    this.transporter = nodemailer.createTransport(options.transport);
    this.options = options;
    this.logger = logger;
  }

  static validateOptions(options: Record<any, any>) {
    if (!options.fromEmail) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Option `fromEmail` is required in the provider's options."
      );
    }
    if (!options.transport) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Option `transport` is required in the provider's options."
      );
    }
  }

  async send(
    notification: ProviderSendNotificationDTO
  ): Promise<ProviderSendNotificationResultsDTO> {
    const emailOptions: SendMailOptions = {
      from: this.options.fromEmail,
      to: notification.to,
      subject: (notification?.data?.subject || "") as string | undefined,
      html: notification.template,
    };

    const info = await this.transporter.sendMail(emailOptions).catch((err) => {
      this.logger.error(`Failed to send email`, err);
      return null;
    });

    if (!info) {
      return {};
    }

    return { id: info.messageId };
  }
}

export default NotificationService;
