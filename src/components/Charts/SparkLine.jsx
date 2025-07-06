import React from 'react'
import { Inject , SparklineTooltip, SparklineComponent}  from '@syncfusion/ej2-react-charts' 

const SparkLine = ({color , id , height , width , currentColor , type , data}) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{color:currentColor , width:2}}
      dataSource={data}
      xName='x'
      yName='yval'
      type={type}
      tooltipSettings={{
        visible: true,
        format:'${x} : data ${yval}',
        trackLineSettings :{
          visible:true
        }
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine