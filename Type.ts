export type Msg = {
  author?: {
    username?: string;
    bot?: any;
  };
  content: string;
  reply: (msg: string) => Promise<Msg>;
  edit: (msg: string) => void;
  react: (reaction: string) => void;
};
