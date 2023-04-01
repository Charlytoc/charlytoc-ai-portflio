interface queryParams {
    visitor: string;
}

const homePage = {
    greeting: 'Hello, ',
    currentlyWorking: `currently I'm working in this page, it will be available soon!`
}

export default function Port3000 ({params}: { params: queryParams }) {
    return <>
    <div id="waiting-greeting">
        <p>{homePage.greeting}<span className="var-2">{params.visitor}</span></p>
        <p>{homePage.currentlyWorking}</p>
    </div>
    </>
}