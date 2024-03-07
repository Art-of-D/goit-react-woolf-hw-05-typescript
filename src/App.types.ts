import React from "react";

export type Props = {
  children: React.ReactElement;
  onContentEndVisible: () => void;
};

export type State = {
  isRequestInProgress: boolean;
  requestStep: string;
};

export type Action = {
  type: string;
};
