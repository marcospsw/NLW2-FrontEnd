import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';




function TeacherForm(){
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preeencher esse formulario de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo"/>
          <Input name="avatar" label="Avatar"/>
          <Input name="whatsapp" label="WhatsApp"/>
          <Textarea name="bio" label="Biografia"/>

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          
          <Select 
            name="subject" 
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Ciências', label: 'Ciências'},
              { value: 'Educação Fisíca', label: 'Educação Fisíca'},
              { value: 'Geografia', label: 'Geografia'},
              { value: 'História', label: 'História'},
              { value: 'Matemática', label: 'Matemática'},
              { value: 'Portugues', label: 'Portugfues'},
              { value: 'Quimica', label: 'Quimica'},              
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula"/>

        </fieldset>

        <fieldset>
          <legend>Horários Disponíveis
            <button type="button">
              + Novo Horario
            </button>
          </legend>
          

          <div className="schedule-item">
            <Select 
              name="subject" 
              label="Matéria"
              options={[
                { value: 'Artes', label: 'Artes'},
                { value: 'Biologia', label: 'Biologia'},
                { value: 'Ciências', label: 'Ciências'},
                { value: 'Educação Fisíca', label: 'Educação Fisíca'},
                { value: 'Geografia', label: 'Geografia'},
                { value: 'História', label: 'História'},
                { value: 'Matemática', label: 'Matemática'},
                { value: 'Portugues', label: 'Portugfues'},
                { value: 'Quimica', label: 'Quimica'},              
              ]}
            />
            <Input name="from" label="Das" type="time" />
            <Input name="to" label="Até" type="time" />

          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"></img>
            Importante!!!<br />
            Preencha todos os campos
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;