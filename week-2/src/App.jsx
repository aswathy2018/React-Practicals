/////////////////////////////Capital

// import React from 'react'
// import Capital from './Practice/Capital'

// const App = () => {
//   return (
//     <div>
//       <Capital/>
//     </div>
//   )
// }

// export default App


////////////////////////////////Re-render a component if page resized

// import React from 'react'
// import Resize from './Practice/Resize'

// const App = () => {
//   return (
//     <div>
//       <Resize/>
//     </div>
//   )
// }

// export default App


/////////////////////////////Child to parent

// import React from 'react'
// import Parent from './Practice/Parent'
// import Child from './Practice/Child'

// const App = () => {
//   return (
//     <Parent>
//       <Child/>
//     </Parent>
//   )
// }

// export default App


////////////////////////////Counter

// import React from 'react'
// import Counter from './Practice/Counter'

// const App = () => {
//   return (
//     <>
//     <Counter/>
//     </>
//   )
// }

// export default App

import React from 'react'
import Parent from './Practice/Parent'
import Child from './Practice/Child'

const App = () => {
  return (
    <Parent>
      <Child/>
    </Parent>
  )
}

export default App