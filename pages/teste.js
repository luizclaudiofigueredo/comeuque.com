// yourComponent.js

import useWindowDimensions from '../components/useWindowDimensions';

const Teste = () => {
  const { height, width } = useWindowDimensions();
  /* you can also use default values or alias to use only one prop: */
  // const { height: windowHeight = 480 } useWindowDimensions();

  return (
    <div>
      width: {width} ~ height: {height}
    </div>
  )
}

export default Teste