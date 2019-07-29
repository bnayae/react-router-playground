import * as React from 'react';
import { Form, FormRenderProps, FormSpy } from "react-final-form";
import IStageTemplateProps from '../IStageTemplateProps';


export function StageTemplate<T>(props: IStageTemplateProps<T>) {
    const data = props.useData();

    return (
        <Form onSubmit={props.submit} initialValues={data} subscription={{ submitting: true }}>
            {(formProps: FormRenderProps<T>) => {
                const { handleSubmit, submitting, values } = formProps;
                const children = props.children;
                // children.props = { ...formProps, ...children.props }
                return (
                    <>
                        <h4>Rendering</h4>
                        <form onSubmit={handleSubmit}>
                            <>
                                {children}
                                <br />
                                <button type="submit" disabled={submitting}>Submit</button>
                                <br />
                                <pre style={{ textAlign: "left" }}>{JSON.stringify(values, undefined, 2)}</pre>
                            </>
                        </form>
                    </>)
            }}
        </Form>
    );
}