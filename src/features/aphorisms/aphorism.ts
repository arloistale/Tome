export interface Aphorism {
  id: string;
  createdAt: Date;
  presentedAt: Date | undefined;
  title: string;
  content: string;
}
