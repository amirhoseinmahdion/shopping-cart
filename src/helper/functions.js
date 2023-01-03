export const shorten = (title) => {
  const splitedTitle = title.split(" ");
  const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
  return newTitle;
};

export const isInCart = (state, id) => {
  const result = !!state.selectItems.find((item) => item.id === id);
  return result;
};

export const Cartcounter = (state, id) => {

    const Index = state.selectItems.findIndex(item => item.id === id)

    if(Index === -1){
        return false
    }else{
        return state.selectItems[Index].quantity
    }

}
