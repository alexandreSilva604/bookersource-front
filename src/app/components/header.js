export default function Header(props) {

    return (
        <header className="py-5">
            <div className="container px-4 px-lg-5 my-1">
                <div className="text-center">
                    <h1 className="display-4 fw-bolder">{props.title}</h1>
                    {
                        props.subtitle ?
                        <p className="lead fw-normal mb-0">{props.subtitle}</p>
                        :
                        <></>
                    }
                </div>
            </div>
        </header>
    );
}