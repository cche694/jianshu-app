import React, { PureComponent } from 'react';
import WriterStyle from "../style.module.scss"
class Writer extends PureComponent {
    
    render() { 
        return ( 
            <div className={`${WriterStyle.writerWrapper}`}>Writer</div>
         );
    }
}
 
export default Writer;