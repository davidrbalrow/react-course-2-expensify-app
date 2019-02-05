onSubmit={(expense)=>{
    props.dispatch(
        (dispatch) => {
            return  database.ref(`expenses/${id}`)
            .update(updates).then(()=>{   
              dispatch(editExpense(id, updates));
              });
          };

    );
    console.log(props.match.params.id);
    props.history.push('/');
}}

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
      return  database.ref(`expenses/${id}`)
      .update(updates).then(()=>{   
        dispatch(editExpense(id, updates));
        });
    };
};