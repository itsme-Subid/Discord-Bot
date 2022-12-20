export type Msg = {
  author?: {
    username?: string;
    bot?: any;
  };
  content: string;
  channel: {
    send: (msg: string) => Promise<Msg>;
  };
  reply: (msg: string) => Promise<Msg>;
  edit: (msg: string) => void;
  delete: () => void;
  react: (reaction: string) => void;
};
