console.log('App.js is running');

//JSX - JavaScript XML

const app = {
    title : 'Indecision App2',
    subtitle: 'this is some text1',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderCounterApp();
    }
};

const onRemoveAll = (e) => {
    app.options = [];
    renderCounterApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];

    alert(option);
};


const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderCounterApp = () =>{
    console.log('in render func');
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p> { app.options.length>0 ? 'Here are your options' : 'No Options'} </p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0}onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
         
            <ol>
                {
                    app.options.map((option)=>{
                        return <li key={option}>Option: {option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
        );
        ReactDOM.render(template, appRoot);
};

renderCounterApp();
    



