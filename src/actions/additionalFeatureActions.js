export const addFeature = (index) => {
    console.log('addFeature running', index)
    return { type: 'ADD_FEATURE', payload: index }
}
