class VisibilityToggle extends React.Component{

    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState)=>{
            
            return {
                visible: !prevState.visible //? false : true
            }
        });
        console.log(this.state.visible );
    }


    render(){
        return(
            <div>
            
                    <h1>Visibiltiy toggle</h1>
                    <button onClick={this.handleToggleVisibility}> {this.state.visible ? 'Hide Details' : 'Show Details'}</button>
                    {this.state.visible && (
                        <div>
                        <p>Here are some details</p>
                        </div>
                    )}
            
                </div>


        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibleFlag = false;
// let visibleText ='';


// const showResults = () =>{
//     visibleFlag = !visibleFlag;
//     render();
// }

// const render = () => {

//     const template = (
//         <div>
//         <h1>Visibiltiy toggle</h1>
//         <button onClick={showResults}> {visibleFlag ? 'Hide Details' : 'Show Details'}</button>
//         {visibleFlag && (
//             <div>
//             <p>Here are some details</p>
//             </div>
//         )}

//         </div>

//     )
//     ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById('app');

// render();

