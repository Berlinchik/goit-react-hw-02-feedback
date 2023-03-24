import { MainSection, Title } from './Section.styled'

const Section = ({ title, children}) => {
    return <MainSection>
        <Title>{title}</Title>
        {children}
    </MainSection>
}

export default Section;