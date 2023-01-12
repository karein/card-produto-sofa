
import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: auto;
  min-height: 100vh;
  
  div{

    
    &.sofa-image{ 
      display: flex;
      flex-direction: column;

      
      img {
        height: 14rem;
        width: 29rem;

        &.vector360{
          height: 22px;
          width:33px;
          margin-right: 0;
          cursor: pointer;

          &:hover{
            transform: scale(1.2);
          }
        }
      }
    }
    
    &.description{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100% ;
      font-family: 'Lato', sans-serif;
    }

    span{
      margin: auto 0;
      font-weight: 200;

      &.code{
        font-size: 10px;
      }
      
      &.price{
        font-size: 16px;
        margin-bottom: 20px;
      }

      &.tilte{
        font-family: 'Crimson Pro', serif;
        font-weight: 600;
        font-size: 32px;
        margin: 12px 0 ;
      }
    }

    button{
      border-radius: 2rem;
      margin-left: 0;
      padding: 8px 16px;
      background: var(--background);
      border: 1px solid var(--text);
  
      transition: filter 0.2s;

        &:hover{
        filter: brightness(0.9);
      }
    }
  }
`