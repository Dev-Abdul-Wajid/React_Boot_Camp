### memo
    React.memo() is a higher-order component, not a hook. memo lets you skip re-rendering a component when its props are unchanged.

    Wrap a component in memo to get a memoized version of that component. This memoized version of your component will usually not be re-rendered when its parent component is re-rendered as long as its props have not changed. But React may still re-render it: memoization is a performance optimization, not a guarantee.

    To implement same behaviour in class component please use shouldComponentUpdate
###### Usage
    Skipping re-rendering when props are unchanged                  Example6.js
    Updating a memoized component using state                       Example6.js


    When you use memo, your component re-renders whenever any prop is not shallowly equal to what it was previously.
    This means that React compares every prop in your component with its previous value using the Object.is comparison.

    Note that Object.is(3, 3) is true, but Object.is({}, {}) is false.

    https://react.dev/reference/react/memo


### useMemo
    useMemo is a React Hook that lets you cache the result of a calculation between re-renders. Call useMemo at the top level of your component to cache a calculation between re-renders.

    The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

###### Usage
    Skipping recalculation with useMemo                  Example7.js
