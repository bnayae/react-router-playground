import * as React from 'react';
import { useEffect } from 'react';
import ILinkToProps from '../routing/ILinkToProps';
import useUpdater from '../contexts/useUpdater';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Announcement';

export interface IUsersProps {
    id?: number
}

export default function Users(props: IUsersProps) {
    var { setValue } = useUpdater();

    useEffect(() => {
        const navigation: ILinkToProps[] = [
            { to: "/", text: "Home", icon: <HomeIcon /> },
            { to: "/about", text: "About", icon: <AboutIcon /> },
        ];
        setValue(navigation);

        return () => setValue([]);
    }, []);

    return (
        <div>
            <h4>Users</h4>
            <p>id = {props.id}</p>
        </div>
    );
}
