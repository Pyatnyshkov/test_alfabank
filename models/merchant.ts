export interface IObjectKeys {
  [key: string]: any;
}

export interface Merchant extends IObjectKeys {
  creation_time?: number;
  template_merchant_login: string;
  merchant_login: string;
  merchant_full_name: string;
  password?: string;
  must_change_pwd?: boolean;
  processing_id: string;
  terminal_id: string;
  visa_3ds_id?: string;
  master_card_3ds_id?: string;
  mir_3ds_id?: string;
  merchant_url?: string;
  merchant_emails: string;
  payment_page_login?: string;
  options?: string[];
  currencies?: string[];
  default_currency?: string;
  back_url?: string;
  fail_url?: string;
  rules_page_merchant_name?: string;
  merchant_inn?: string;
  merchant_kpp?: string;
  merchant_ogrn?: string;
  merchant_actual_address?: string;
  merchant_phone?: string;
  merchant_feedback_email?: string;
  rules_page_login?: string;
  rulesInfo?: object[];
  custom_user_logins?: string[];
  external_fraud_control_enabled?: boolean;
  overrided_fraud_control_login?: string;
  enabled?: boolean;
  sbp_terminal_id?: string;
  amex_3ds_id?: string;
  jcb_3ds_id?: string;
  cup_3ds_id?: string;
  mcc?: string;
  card_acceptor_code?: string;
  agreement_url?: string;
  default_language?: string;
  locales?: string;
  finish_page_login?: string;
  use_multi_language_payment_page?: boolean;
  signer_token?: string;
  callback_token?: string;
  callback_signing_type?: string;
  show_param_list_mapping?: string[];
  show_binding_param_list?: string[];
  viewable_merchant_bindings?: string[];
  allowed_binding_type?: string;
  private_bindings?: boolean;
  payment_attempts?: number;
  refund_attempts?: number;
  overrided_fraud_control_login_enabled?: boolean;
  session_timeout_secs?: number;
  auto_completion_delay_hours?: number;
  callback_type?: string;
  callback_addresses?: string;
  callback_operations?: string[];
  send_client_email?: boolean;
  send_merchant_email?: boolean;
  callback_headers?: string;
  callback_additional_params?: string;
  parent_id?: string;
  operations_for_payer_notification?: string[];
  operations_for_merchant_notification?: string[];
  limits?: object[];
  processing_fields?: object[];
  received_processing_fields?: object[];
  verify_purchase_fields?: object[];
  return_params_fields?: object[];
  return_back_url_params_fields?: object[];
  description?: string;
  open_token_id?: string;
  merchant_additional_param?: object[];
  visa_client_app_id?: string;
  mastercard_token_requestor_id?: string;
  users: User[];
}

export interface User extends IObjectKeys {
  username: string;
  password: string;
}

// interface Options {
//   ACCEPT_ONLY_ECI_Y?: string,
//   ALFA_SBP_PAYMENT_BY_QR_CODE_ALLOWED?: string,
//   ALLOW_TO_CHARGE_COMMISSION?: string,
//   ALTERNATIVE_SESSION_TIMEOUT?: string,
//   ANDROID_PAY_BINDING_ALLOWED?: string,
//   APPLE_PAY_BINDING_ALLOWED?: string,
//   APPLE_PAY_QUICK_BUTTONS?: string,
//   AUTOCOMPLETION_ALLOWED?: string,
//   AUTOPAYMENTS_ALLOWED?: string,
//   AVIA_ADDENUM?: string,
//   AVS_ALLOWED?: string,
//   BINDING_ALLOWED?: string,
//   BINDING_DEACTIVATION_ALLOWED?: string,
//   BINDING_WITHOUT_PAYMENT_ALLOWED?: string,
//   BINDINGS_V2_ALLOWED?: string,
//   CALLBACK_OPERATIONS?: string,
//   CAN_CREATE_OFD_RECEIPTS_MANUALLY?: string,
//   CAN_DISPLAY_IPS_RULES?: string,
//   CAN_TRANSFER_PERSONAL_DATA?: string,
//   CAN_UPLOAD_MPI_CERTIFICATES?: string,
//   CLIENT_ID_GENERATION?: string,
//   CREDENTIALS_IN_HTTP_GET_ALLOWED?: string,
//   CREDIT_BINDING_ALLOWED?: string,
//   CURRENCY_CONVERSION_REQUIRED?: string,
//   CUSTOM_PAYMENT_PAGE?: string,
//   DEPOSIT_CAN_BE_EXCEEDED?: string,
//   GENERATE_ORDERNUMBER?: string,
//   GET_BINDINGS_BY_CARD_NUMBER_OR_BINDING_ID?: string,
//   GOOGLE_PAY_CARD_ALLOWED?: string,
//   GOOGLE_PAY_CARD_BINDING_ALLOWED?: string,
//   GOOGLE_PAY_TOKENIZED_ALLOWED?: string,
//   GOOGLE_PAY_TOKENIZED_BINDING_ALLOWED?: string,
//   INHERIT_PARENT_BINDING?: string,
//   INHERIT_PARENT_LIMIT?: string,
//   INHERIT_PARENT_LIST?: string,
//   IREQ_SSL_ENABLED?: string,
//   JSECURE_ALLOWED?: string,
//   JSECURE_ALLOWED_3DS2?: string,
//   MASTERCARD_INSTALLMENTS_ALLOWED?: string,
//   MASTERCARD_TOKENIZE?: string,
//   MERCHANT_SIDE_PAYMENT_FORM_ALLOWED?: string,
//   MIR_ACCEPT_ALLOWED?: string,
//   MIR_ACCEPT_ALLOWED_3DS2?: string,
//   MTS_PAYMENT_ALLOWED?: string,
//   NOTIFY_BINDING_CREATED?: string,
//   ORDER_DESCRIPTION_REQUIRED?: string,
//   PARENTS_RULE_INHERITANCE?: string,
//   PARTIAL_REVERSE?: string,
//   PAY_BY_CARD_NOT_ALLOWED?: string,
//   PAY_BY_CARD_QUICK_BUTTONS?: string,
//   PAY_BY_OTHER_WAY?: string,
//   PAY_WITH_PSE?: string,
//   PAY_WITHOUT_CVC?: string,
//   PAYMENT_WITH_SELF_ENCRYPTED_TOKEN_ALLOWED?: string,
//   RBS_INSTALLMENTS_ALLOWED?: string,
//   RECURRENT_INITIALIZE?: string,
//   REFUND_CAN_BE_EXCEEDED?: string,
//   REFUNDS_ALLOWED?: string,
//   REGISTER_BY_CLIENT?: string,
//   REPLY_3DS_DATA?: string,
//   SAFE_KEY_ALLOWED?: string,
//   SAFE_KEY_ALLOWED_3DS2?: string,
//   SAMSUNG_PAY_BINDING_ALLOWED?: string,
//   SBP_B2C_ALLOWED?: string,
//   SECURECODE_ALLOWED?: string,
//   SECURECODE_ALLOWED_3DS2?: string,
//   SEND_CLIENT_EMAIL_AFTER_REFUND?: string,
//   SEND_EMAIL_INSTEAD_COMPLETION_REVERSAL?: string,
//   SEND_ORDER_DESC_TO_SV?: string,
//   SEND_ORDER_NUMBER_TO_SV?: string,
//   SEND_ORDER_REGISTRATION_NOTIFICATION?: string,
//   SEND_PAYER_NOTIFICATION_BY_PHONE?: string,
//   SEND_PAYMENT_FORM?: string,
//   SMS_BINDING_PAYMENT_ALLOWED?: string,
//   SSL_ALLOWED?: string,
//   SSL_AMEX_ALLOWED?: string,
//   SSL_CUP_ALLOWED?: string,
//   SSL_JCB_ALLOWED?: string,
//   SSL_MASTERCARD_ALLOWED?: string,
//   SSL_MIR_ALLOWED?: string,
//   SSL_VIA_3DS_BINDING?: string,
//   SSL_VISA_ALLOWED?: string,
//   THREEDS_VER2_ALLOWED?: string,
//   TOKEN_PAY_ALLOWED?: string,
//   TOKEN_PAY_BINDING_ALLOWED?: string,
//   TRY_SSL_IF_U_IN_ARES_AMEX?: string,
//   TRY_SSL_IF_U_IN_ARES_CUP?: string,
//   TRY_SSL_IF_U_IN_ARES_JCB?: string,
//   TRY_SSL_IF_U_IN_ARES_MC?: string,
//   TRY_SSL_IF_U_IN_ARES_MIR?: string,
//   TRY_SSL_IF_U_IN_ARES_VISA?: string,
//   TRY_SSL_IF_U_IN_PARES_AMEX?: string,
//   TRY_SSL_IF_U_IN_PARES_JCB?: string,
//   TRY_SSL_IF_U_IN_PARES_MC?: string,
//   TRY_SSL_IF_U_IN_PARES_VISA?: string,
//   TRY_SSL_IF_U_IN_VERES_AMEX?: string,
//   TRY_SSL_IF_U_IN_VERES_JCB?: string,
//   TRY_SSL_IF_U_IN_VERES_MC?: string,
//   TRY_SSL_IF_U_IN_VERES_MIR?: string,
//   TRY_SSL_IF_U_IN_VERES_VISA?: string,
//   TWO_PHASE_PAYMENT_ALLOWED?: string,
//   UNIONPAY_3D_SECURE_ALLOWED?: string,
//   USE_AMEX?: string,
//   USE_ANDROIDPAY?: string,
//   USE_APPLEPAY?: string,
//   USE_COMPLETION_FINISH_3DS_PAGE?: string,
//   USE_CUP?: string,
//   USE_EXTERNAL_MPI?: string,
//   USE_GENERIC_FINISH_PAYMENT_PAGE?: string,
//   USE_JCB?: string,
//   USE_LIMIT?: string,
//   USE_SAMSUNGPAY?: string,
//   USE_TDS_AUTHORIZER?: string,
//   VENDOR_PAY_DIRECT_ALLOWED?: string,
//   VERIFIED_BY_VISA_ALLOWED?: string,
//   VERIFIED_BY_VISA_ALLOWED_3DS2?: string,
//   VERIFY_ENROLLMENT?: string,
//   VERIFY_PAYMENTS_ALLOWED?: string,
//   VISA_INSTALLMENTS_ALLOWED?: string,
//   VISA_TOKENIZE?: string,
//   WHITE_LIST_CREDIT?: string,
//   WHITE_LIST_DEBIT?: string,
//   WORK_WITH_DMR?: string
// }
