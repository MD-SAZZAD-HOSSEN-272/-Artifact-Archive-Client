import { PrefetchPageLinks } from 'react-router';
import Artifacts from '../Components/Artifacts';
import Banner from '../Components/Banner'
import FeatureTime from '../Components/FeatureTime';
import PreservationTips from '../Components/PreservationTips';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <Artifacts></Artifacts>
            </section>
            <section>
                <FeatureTime></FeatureTime>
            </section>
            <section>
                <PreservationTips></PreservationTips>
            </section>
        </div>
    );
};

export default Home;