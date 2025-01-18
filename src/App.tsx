import CustomColumn from "./components/CustomColumn"
import CustomFont from "./components/CustomFont"

function App() {

  return (
    <CustomColumn $width="100%" $minHeight="100vh">
      <CustomFont $color='black'>하이!</CustomFont>
    </CustomColumn>
  )
}

export default App
