import React from 'react'
import R from 'ramda'
import {Grid, GridBlock} from './Grid'

export default function() {
  var loremText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  var blocksGenerator = R.addIndex(R.map)((obj, idx) => {
    var childClass = [
      // 'u-marginAll-xxs',
      idx%2 == 0 ? 'u-background-warning' : 'u-background-info'
    ].join(' ')

    // contentEditable

    var attrs = {key:idx}
    if(obj.align){ attrs.align = obj.align }
    if(obj.order){ attrs.order = obj.order }
    if(obj.weight){ attrs.weight = `${obj.weight}` }
    if(obj.size){ attrs.className = `u-size${obj.size}/12` }

    return (
      <GridBlock {...attrs}>
        <div className={childClass}>
          {obj.size ? `size:${obj.size}` : ''}
          {obj.weight ? `weight:${obj.weight}` : ''}
          {obj.text}
        </div>
      </GridBlock>
    )
  })

  return (
    <div>
      <h1>Grid</h1>
      <div className='u-marginBottom-m  u-background-grayLightest u-paddingBottom-xs'>
        <h2>Grid basic</h2>
        <Grid>{blocksGenerator([{size:1}, {size:1}, {size:1}, {size:1}, {size:1}, {size:1}, {size:1}, {size:1}, {size:1}, {size:1}, {size:1}, {size:1}])}</Grid>
        <Grid>{blocksGenerator([{size:2}, {size:2}, {size:2}, {size:2}, {size:2}, {size:2}])}</Grid>
        <Grid>{blocksGenerator([{size:3}, {size:3}, {size:3}, {size:3}])}</Grid>
        <Grid>{blocksGenerator([{size:4}, {size:4}, {size:4}])}</Grid>
        <Grid>{blocksGenerator([{size:5}, {size:5}, {size:2}])}</Grid>
        <Grid>{blocksGenerator([{size:6}, {size:6}])}</Grid>
        <Grid>{blocksGenerator([{size:7}, {size:5}])}</Grid>
        <Grid>{blocksGenerator([{size:8}, {size:4}])}</Grid>
        <Grid>{blocksGenerator([{size:9}, {size:3}])}</Grid>
        <Grid>{blocksGenerator([{size:10}, {size:2}])}</Grid>
        <Grid>{blocksGenerator([{size:11}, {size:1}])}</Grid>
        <Grid>{blocksGenerator([{size:12}])}</Grid>
      </div>
      <div className='u-marginBottom-m'>
        <h2>Grid space</h2>
        <pre className="u-marginLeft-xs u-marginBottom-s">space: [Start*| End| Center| Between| Around]</pre>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">space="Start"</pre>
          <Grid space="Start">{blocksGenerator([{size:3}, {size:4}, {size:1}])}</Grid>
        </div>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">space="End"</pre>
          <Grid space="End">{blocksGenerator([{size:1}, {size:2}, {size:3}, {size:2}])}</Grid>
        </div>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">space="Center"</pre>
          <Grid space="Center">{blocksGenerator([{size:1}, {size:2}, {size:3}, {size:2}])}</Grid>
        </div>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">space="Between"</pre>
          <Grid space="Between">{blocksGenerator([{size:1}, {size:2}, {size:3}, {size:2}])}</Grid>
        </div>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">space="Around"</pre>
          <Grid space="Around">{blocksGenerator([{size:1}, {size:2}, {size:3}, {size:2}])}</Grid>
        </div>
      </div>
      <div className='u-marginBottom-m'>
        <h2>Grid gutter</h2>
        <pre className="u-marginLeft-xs u-marginBottom-s">gutter: [Normal| Narrow| Wide]</pre>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">gutter="Normal"</pre>
          <Grid gutter="Normal">{blocksGenerator([{size:1}, {size:2}, {size:3}, {size:4}, {size:2}])}</Grid>
        </div>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">gutter="Narrow"</pre>
          <Grid gutter="Narrow">{blocksGenerator([{size:1}, {size:2}, {size:3}, {size:4}, {size:2}])}</Grid>
        </div>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">gutter="Wide"</pre>
          <Grid gutter="Wide">{blocksGenerator([{size:1}, {size:2}, {size:3}, {size:4}, {size:2}])}</Grid>
        </div>
      </div>
      <div className='u-marginBottom-m'>
        <h2>Grid align</h2>
        <pre className="u-marginLeft-xs u-marginBottom-s">align: [Start| End| Center| Baseline| Stretch*]</pre>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">align="Start"</pre>
          <Grid align="Start">{blocksGenerator([{size:1}, {size:2}, {size:3, text:loremText}, {size:4}, {size:2}])}</Grid>
        </div>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">align="End"</pre>
          <Grid align="End">{blocksGenerator([{size:1}, {size:2}, {size:3, text:loremText}, {size:4}, {size:2}])}</Grid>
        </div>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">align="Center"</pre>
          <Grid align="Center">{blocksGenerator([{size:1}, {size:2}, {size:3, text:loremText}, {size:4}, {size:2}])}</Grid>
        </div>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">align="Baseline"</pre>
          <Grid align="Baseline">{blocksGenerator([{size:1}, {size:2}, {size:3, text:loremText}, {size:4}, {size:2}])}</Grid>
        </div>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">align="Stretch"</pre>
          <Grid align="Stretch">{blocksGenerator([{size:1}, {size:2}, {size:3, text:loremText}, {size:4}, {size:2}])}</Grid>
        </div>
      </div>
      <div className='u-marginBottom-m'>
        <h2>Grid-block align</h2>
        <pre className="u-marginLeft-xs u-marginBottom-s">align: [Start| End| Center| Baseline| Stretch]</pre>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">Grid align="Start"</pre>
          <Grid align="Start">{blocksGenerator([{size:1, align:'Center', text:`align:'Center'`}, {size:2}, {size:3, text:loremText}, {size:4}, {size:2}])}</Grid>
        </div>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">Grid align="End"</pre>
          <Grid align="End">{blocksGenerator([{size:1, align:'Start', text:`align:'Start'`}, {size:2}, {size:3, text:loremText}, {size:4}, {size:2}])}</Grid>
        </div>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">Grid align="Center"</pre>
          <Grid align="Center">{blocksGenerator([{size:1, align:'End', text:`align:'End'`}, {size:2}, {size:3, text:loremText}, {size:4}, {size:2}])}</Grid>
        </div>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">Grid align="Baseline"</pre>
          <Grid align="Baseline">{blocksGenerator([{size:1, align:'Stretch', text:`align:'Stretch'`}, {size:2}, {size:3, text:loremText}, {size:4}, {size:2}])}</Grid>
        </div>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">Grid align="Stretch"</pre>
          <Grid align="Stretch">{blocksGenerator([{size:1, align:'Baseline', text:`align:'Baseline'`}, {size:2}, {size:3, text:loremText}, {size:4}, {size:2}])}</Grid>
        </div>
      </div>
      <div className='u-marginBottom-m'>
        <h2>Grid-block order</h2>
        <pre className="u-marginLeft-xs u-marginBottom-s">order: [Start1 | Start2 | Start3 | End3 | End2 | End1]</pre>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <Grid>{blocksGenerator([
            {size:1, text:`[source:1], order:'End3'`, order:'End3'},
            {size:1, text:`[source:2], order:'End2'`, order:'End2'},
            {size:1, text:`[source:3], order:'End1'`, order:'End1'},
            {size:1, text:`[source:4], order:'Start1'`, order:'Start1'},
            {size:1, text:`[source:5], order:'Start2'`, order:'Start2'},
            {size:1, text:`[source:6], order:'Start3'`, order:'Start3'},
            {size:2, text:'source:7'},
            {size:2, text:'source:8'}
            ])}</Grid>
        </div>
      </div>
      <div className='u-marginBottom-m'>
        <h2>Grid direction</h2>
        <pre className="u-marginLeft-xs u-marginBottom-s">direction:[Row | RowReverse | Col | ColReverse]</pre>
        <p>TODO add demo of [Col | ColReverse]</p>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">Grid direction="Row"</pre>
          <Grid direction="RowReverse@s Row@m">{blocksGenerator([
            {size:1, text:`[source:1], order:'End3'`, order:'End3'},
            {size:1, text:`[source:2], order:'End2'`, order:'End2'},
            {size:1, text:`[source:3], order:'End1'`, order:'End1'},
            {size:1, text:`[source:4], order:'Start1'`, order:'Start1'},
            {size:1, text:`[source:5], order:'Start2'`, order:'Start2'},
            {size:1, text:`[source:6], order:'Start3'`, order:'Start3'},
            {size:2, text:'source:7'},
            {size:2, text:'source:8'}
            ])}</Grid>
        </div>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">Grid direction="RowReverse"</pre>
          <Grid direction="RowReverse">{blocksGenerator([
            {size:1, text:`[source:1], order:'End3'`, order:'End3'},
            {size:1, text:`[source:2], order:'End2'`, order:'End2'},
            {size:1, text:`[source:3], order:'End1'`, order:'End1'},
            {size:1, text:`[source:4], order:'Start1'`, order:'Start1'},
            {size:1, text:`[source:5], order:'Start2'`, order:'Start2'},
            {size:1, text:`[source:6], order:'Start3'`, order:'Start3'},
            {size:2, text:'source:7'},
            {size:2, text:'source:8'}
            ])}</Grid>
        </div>

      </div>
      <div className='u-marginBottom-m  u-background-grayLightest u-paddingBottom-xs'>
        <h2>Grid-block weight :[1, 2, 3, 4, 5, 6, 7]</h2>
        <Grid>{blocksGenerator([{weight:1}, {weight:1}])}</Grid>
        <Grid>{blocksGenerator([{weight:1}, {weight:2}, {weight:1}])}</Grid>
        <Grid>{blocksGenerator([{weight:1}, {weight:1}, {weight:2}])}</Grid>
        <Grid>{blocksGenerator([{weight:1}, {weight:3}])}</Grid>
        <Grid>{blocksGenerator([{weight:1}, {weight:5}])}</Grid>
        <Grid>{blocksGenerator([{weight:2}, {weight:1}, {weight:7}])}</Grid>
        <Grid>{blocksGenerator([{weight:3}, {weight:5}, {weight:2}])}</Grid>
        <div className="u-marginBottom-m u-background-grayLightest u-paddingBottom-xs">
          <pre className="u-paddingLeft-s">Grid-block weight and size</pre>
          <Grid wrap={true}>{blocksGenerator([
            {weight:1},
            {weight:1},
            {size:8},
            {weight:1},
            {weight:1},
            {size:4},
            {size:8},
            {size:8},
            {weight:1},
            {weight:1},
            ])}</Grid>
        </div>
      </div>
    </div>
  )
}
