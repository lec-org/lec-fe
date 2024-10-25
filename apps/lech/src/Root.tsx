import { Outlet } from 'react-router-dom'
import Header from '@/components/header/Header'

const Root = () => {
    return (
        <>
            <Header>
                <Header.Logo>
                    LOGO
                </Header.Logo>
                <Header.Avatar>
                    AVATAR
                </Header.Avatar>
            </Header>
            <Outlet />
        </>
    )
}

export default Root