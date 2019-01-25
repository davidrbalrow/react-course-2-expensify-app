class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    };
    componentDidMount(){

     
            const savedCount = parseInt(localStorage.getItem('count'),10);
            if (!isNaN(savedCount)){
                this.setState(() => ({count: savedCount}));
            }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count){
            //const count = parseInt(this.state.count,10);
            localStorage.setItem('count', this.state.count);
        }
        
    }

    addOne() {
            this.setState((prevState)=>{
                return {
                    count: prevState.count + 1
                }
            });
        };
    
    minusOne() {
        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            }
        });
    }

    reset(){
        this.setState((prevState)=>{
            return {
                count: 0
            }
        });
       
    }
    
    render(){
        return(
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.addOne}>+1</button>
            <button onClick={this.minusOne}>-1</button>
            <button onClick={this.reset}>reset</button>
            </div>


        );
    }
}



ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () =>{
//     console.log('addOne');
//     count++;
//     renderCounterApp();
// };

// const minusOne = () =>{
//     console.log('minsuOne');
//     count--;
//     renderCounterApp();
// };

// const reset = () =>{
//     console.log('reset');
//     count=0;
//     renderCounterApp();
// };


// const someId = 'myID'
// const template2 = (
// <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>reset</button>

// </div>

// );



// //ReactDOM.render(template, appRoot);
// ReactDOM.render(template2, appRoot);

// const renderCounterApp = ()=>{
//     const template2 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
        
//         </div>
//     );
//     ReactDOM.render(template2, appRoot);

// };

// renderCounterApp();