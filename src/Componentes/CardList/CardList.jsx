import styled from "styled-components"

const Secao = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
const Videos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.3rem;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #0657a3;
  max-height:40rem ;
`
const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1rem 3rem;
  background-color: var(--dark-grey);
`

export {
  Secao,
  Videos,
  Wrapper
}