export interface Letter {
  id: string | undefined;
  senderAddress: string;
  receiverAddress: string[];
  blockA: string[];
  subject?: string;
  body: string;
  footNote?: string;
}
