import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const MovieIcon = BookIcon;

export const MovieList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="director" />
            <EditButton basePath="/movies" />
        </Datagrid>
    </List>
);

const MovieTitle = ({ record }) => {
    return <span>Movie {record ? `"${record.title}"` : ''}</span>;
};

export const MovieEdit = (props) => (
    <Edit title={<MovieTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <TextInput source="director" />

        </SimpleForm>
    </Edit>
);

export const MovieCreate = (props) => (
    <Create title="Add a Movie record" {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="director" />
        </SimpleForm>
    </Create>
);
