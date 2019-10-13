import * as React from "react";
import { FunctionComponent } from "react";

type SimpleFunctionComponent<P> = (props: P) => React.ReactElement;

declare const withLoadingIndicator: <P>(
  Component: SimpleFunctionComponent<P>
) => SimpleFunctionComponent<P & { isLoading: boolean }>;

type HeaderProps<TContent> = {
  content: TContent;
  title: string;
};

declare const Header: <TContent>(
  props: HeaderProps<TContent>
) => React.ReactElement;

const HeaderWithLoader = withLoadingIndicator(Header);

class Foo extends React.Component {
  render() {
    return <HeaderWithLoader title="Hello" content={12345} isLoading={false} />;
  }
}
