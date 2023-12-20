const ErrorMessage = ({items}) => {
 
return (
   <>
     {items.length === 0 && 'I am still hungry' }
   </>
)
}
export default ErrorMessage;