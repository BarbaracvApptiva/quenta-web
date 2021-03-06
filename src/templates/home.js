import React from 'react';
import _ from 'lodash';
import Alliances from '../components/Alliances';
import Carrousel from '../components/Carrousel';
import Services from '../components/Services';
import components, {Layout} from '../components/index';
import Banner from '../components/Banner';
import Contacto from '../components/Contact';



export default class Home extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                    <Banner {...this.props} />
                    {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                        let GetSectionComponent = components[_.get(section, 'component')];
                        return (
                            <GetSectionComponent key={section_idx} {...this.props} section={section} page={this.props.pageContext} site={this.props.pageContext.site} />
                        )
                    })}
                     <Services/>
                     <Alliances/>
                     <Carrousel/>
                     <Contacto/>
            </Layout>
        );
    }
}
