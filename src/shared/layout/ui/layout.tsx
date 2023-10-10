import './style.scss';

interface IProps {
    navbar: React.ReactNode,
    children: React.ReactNode,
    footer: React.ReactNode,
    modal: React.ReactNode
}

function AppLayout(props: IProps) {
    return (
        <>
            {props.modal}
            {props.navbar}
            <main>
                <div className='container'>
                    {props.children}
                </div>
            </main>
            {props.footer}
        </>
    )
}

export default AppLayout