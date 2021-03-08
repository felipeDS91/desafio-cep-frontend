import React, { useCallback, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { GiImpactPoint } from 'react-icons/gi';
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';
import logoImg from '../../assets/logo.png';
import { Form, Input, Button } from '../../components';
import { Container, Content, AddressCard, AddressItem, Row } from './styles';
import api from '../../services/api';

interface IAddress {
  city: string;
  neighborhood: string;
  state: string;
  street: string;
  zipCode: string;
}

interface IFormData {
  zipCode: string;
}

const SearchAddress: React.FC = () => {
  const { addToast } = useToast();
  const [address, setAddress] = useState<IAddress>();
  const [isLoading, setIsLoading] = useState(false);

  const schema = Yup.object().shape({
    zipCode: Yup.string()
      .trim()
      .matches(/^\d{5}-\d{3}$/, 'Formato inválido')
      .required('Cep obrigatório'),
  });

  const handleSubmit = useCallback(
    async ({ zipCode }: IFormData) => {
      setIsLoading(true);

      try {
        const parsedZipCode = zipCode.replace('-', '');

        const { data } = await api.get(`/api/cep/${parsedZipCode}`);

        setAddress(data);

        addToast({
          type: 'success',
          title: 'Informação',
          description: 'Endereço localizado com sucesso',
        });
      } catch ({ response }) {
        setAddress(undefined);
        addToast({
          type: 'error',
          title: 'Erro ao consultar CEP',
          description: 'Endereço não localizado',
        });
      }
      setIsLoading(false);
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} width="100px" alt="Logotipo" />

        <Form onSubmit={handleSubmit} schema={schema}>
          <Input
            name="zipCode"
            mask="99999-999"
            icon={GiImpactPoint}
            placeholder="Digite o CEP que deseja procurar"
          />
          <Button type="submit" loading={isLoading}>
            <FiSearch size="20" />
            Procurar
          </Button>
          {address && (
            <AddressCard>
              <Row>
                <AddressItem>Cidade: </AddressItem>
                {address?.city}
              </Row>
              <Row>
                <AddressItem>Bairro: </AddressItem>
                {address?.neighborhood}
              </Row>
              <Row>
                <AddressItem>Estado: </AddressItem>
                {address?.state}
              </Row>
              <Row>
                <AddressItem>Rua: </AddressItem>
                {address?.street}
              </Row>
              <Row>
                <AddressItem>CEP: </AddressItem>
                {address?.zipCode}
              </Row>
            </AddressCard>
          )}
        </Form>
      </Content>
    </Container>
  );
};

export default SearchAddress;
