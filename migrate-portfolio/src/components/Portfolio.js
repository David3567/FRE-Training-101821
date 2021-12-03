import { PortfolioNavigation } from './portfolio components/Navigation';
import { Projects } from './portfolio components/Projects';
import { PortfolioFooter } from './portfolio components/Footer';

export const Portfolio = () => {

    return(
        <>
            <PortfolioNavigation />
            <Projects />
            <PortfolioFooter />
        </>
        
    );
}