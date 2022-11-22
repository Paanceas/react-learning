import { LoadingQuote, Quote } from "../03-examples";
import { UseCounter, useFetch } from "../hooks";

export const Layout = () => {
    const { counter, increment } = UseCounter(1);

    const { data, isLoading } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    );
    
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>multiple custom</h1>
            <hr />

            {isLoading ? (
                <LoadingQuote />
            ) : (
                <Quote author={author} quote={quote} />
            )}
            <button disabled={isLoading} className="btn btn-primary" onClick={() => increment()}>Next quote</button>
        </>
    );
};

