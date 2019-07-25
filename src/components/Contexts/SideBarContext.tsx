// https://github.com/bnayae/react-hooks-observable-playground

// https://reactjs.org/docs/hooks-reference.html
// https://codesandbox.io/s/yw5zkyvx4j?from-embed
// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
// https://daveceddia.com/usecontext-hook/

import ObservableContextFactory from './ObservableContextFactory'
import ILinkToProps from '../routing/ILinkToProps';


export interface IObservableContextProps {
    children: React.ReactNode;
}

const factory: ObservableContextFactory<ILinkToProps[]> = new ObservableContextFactory<ILinkToProps[]>([]);

export const Context = factory.Context;

export default function SideBarContext(props: IObservableContextProps) {
    const { children } = props;

    return factory.Provider(children);
}

