import { Link } from "react-router-dom";

function Page404() {
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>This url does not exist</p>
            <Link to="/">Go to home Page</Link>
        </div>
    )
}

export default Page404;