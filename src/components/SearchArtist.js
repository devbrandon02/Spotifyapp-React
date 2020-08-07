/** @jsx jsx */
import React, {Fragment, useState, useEffect} from 'react'
import { Form, FormControl, Container  } from 'react-bootstrap'
import  SearchCard  from './SearchCard'
import { css, jsx } from '@emotion/core'

const formStyles = css`
  margin-bottom: 30px;
`

const SearchArtist = () => {
  const [valuesChange, setValuesChange] = useState({searchChange: ''})
  const { searchChange } = valuesChange
  const [searchValues, setsearchValues] = useState()
  const [renderSearch, setrenderSearch] = useState(false)

  useEffect(() => {
    console.log('search cambios')
  }, [searchValues])


  const handleChange = ({target}) => {
    setValuesChange({
      ...valuesChange,
      [target.name]: target.value
    })
  }

  const handleSearch = (evt) => {
    evt.preventDefault();
    setsearchValues(searchChange)
    setValuesChange({searchChange: ''})
    setrenderSearch(true)
  }

  return (
    <Fragment>
      <Container>
        <Form onSubmit={ handleSearch } css={formStyles}>
          <Form.Label>Buscar</Form.Label>
          <FormControl
            name="searchChange"
            onChange={ handleChange } 
            type="text"
            value= { searchChange }
            autoComplete="off"
            placeholder={`Buscar Artistas`}
          />
        </Form>
        { renderSearch ? 
          <SearchCard types={'artist'} searchText={ searchValues }/>
          : ''
        }
      </Container>
    </Fragment>
  )
}

export default SearchArtist
