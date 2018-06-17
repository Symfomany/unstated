1.  Cours HOC: expliquer le mécanisme, structure
    Exemple avec withToggle()
    https://codesandbox.io/s/7j6zzz82yq

    Exemple avcec withForm() pour valider un formulaire, couper

2.  Cours Unstated - Provider et Consumer
    Documentation: https://reactjs.org/docs/context.html

3.  Redux

Debuguer Redux Chrome

Bon tuto: https://medium.com/backticks-tildes/setting-up-a-redux-project-with-create-react-app-e363ab2329b8

Simple Exemple: https://jsbin.com/debohu/1/edit?html,js,output
Autre exemple: https://codesandbox.io/s/lOmyoxQw1
Exemple complet: https://codesandbox.io/s/voz37vLG5
Plus complexe: https://gist.github.com/zvweiss/66517767889a7ed9895a

Bon site: https://bumbu.github.io/simple-redux/
Redux Documentation: https://redux.js.org/

![https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/cbd8cb0f-97ee-4da0-8913-ac9892621c91/redux-example-css-tricks-opt.pg_](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/cbd8cb0f-97ee-4da0-8913-ac9892621c91/redux-example-css-tricks-opt.pg_)

![https://cdn-images-1.medium.com/max/1600/1*87dJ5EB3ydD7_AbhKb4UOQ.png](https://cdn-images-1.medium.com/max/1600/1*87dJ5EB3ydD7_AbhKb4UOQ.png)

![https://cdn-images-1.medium.com/max/919/1*EdiFUfbTNmk_IxFDNqokqg.png](https://cdn-images-1.medium.com/max/919/1*EdiFUfbTNmk_IxFDNqokqg.png)

![https://cdn-images-1.medium.com/max/541/0*cntBtPADjE2ykLSP.png](https://cdn-images-1.medium.com/max/541/0*cntBtPADjE2ykLSP.png)

## Essentially, the redux store does the following:

- Holds application state
- Allows access to state via getState(). The getState method returns the current state tree of your app.
- Allows state to be updated via dispatch(action) . The dispatch method “dispatches” an action, consequently triggering a state change.
- Registers listeners via subscribe(listener) . The subscribe(listener) adds a change listener. Similar to Flux’s change listener methods.
- Handles unregistering of listeners via the function returned by subscribe(listener).
