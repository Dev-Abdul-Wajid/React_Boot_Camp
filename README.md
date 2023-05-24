# React_Boot_Camp (Session # 1)

##### Before starting project make sure you are using same versions of packages as define below:

    npm version:    6.14.17
    node version:  v14.21.2

#### What we are going to learn today: (23-MAY-2023)
1. Create your first class component

2. Passing props to that component
    In React, one-way data flow is the recommended approach, where data is passed from parent components to child components through props. However, if you need to achieve two-way communication, you can implement it by combining props and callback functions.

    On prop change the render In class components, when a prop value changes, the component's render method will be called again, and the component will re-render with the updated prop values.

3. Create your first state in class component
    If we compare it with Vue than it's better if we call them the data properties in a component
    We can create them using two way's one inside a contructor hook and second is outside the hook.

4. Lifecycle Hooks
                                                                        MOUNTING PHASE
    constructor(props):
        The constructor is the first method called when the component is instantiated. It's used to initialize the component's state and bind event handlers.
        If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React class component.

    static getDerivedStateFromProps(props, state)
        This static method is invoked right before rendering and receives the component's props and state as parameters. It returns an object to update the state or null to indicate no state update is necessary. This method is rarely used in favor of componentDidUpdate.

    render()
        The render() method is the only required method in a class component. The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.

        If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes components easier to think about.

    componentDidMount():
        This method is called immediately after the component is mounted (inserted into the DOM). It's commonly used to initiate API calls, set up subscriptions, or perform any necessary DOM operations.

                                                            UPDATING PHASE (PROPS CHANGE, SET STATE)

    shouldComponentUpdate(nextProps, nextState)
        This method is called before re-rendering the component. It determines if the component should update by returning a boolean value (true to update, false to skip re-rendering). It's often used to optimize performance by preventing unnecessary updates.

    getSnapshotBeforeUpdate(prevProps, prevState)
        This method is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle method will be passed as a parameter to componentDidUpdate().

        Example: https://legacy.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate

    componentDidUpdate(prevProps, prevState, snapshot)
        This method is called immediately after the component updates (re-render). It allows you to perform side effects, such as making API calls based on prop or state changes. It's important to check if the component's props or state have changed before initiating additional actions to avoid infinite loops.

        componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.

                                                                        UNMOUNTING PHASE

    componentWillUnmount()
        This method is called when a component is about to be removed from the DOM. It is used to perform cleanup tasks such as removing event listeners, cleanIntervals and canceling API requests.
