import { ColumnContainer, ColumnTitle, CardContainer } from "./styles";

type ColumnProps = {
    text: string
}

export const Column = ({text}: ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            <CardContainer>One</CardContainer>
            <CardContainer>Two</CardContainer>
            <CardContainer>Three</CardContainer>
        </ColumnContainer>
    )
}