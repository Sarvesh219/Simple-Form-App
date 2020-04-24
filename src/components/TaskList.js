import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import React, { Fragment } from 'react';

const TaskList = ({ formData }) => {
    return (
        <Fragment>
            {formData.map(item => (
                <Card style={{ marginBottom: 5 }}>
                    <CardContent>
                        <Grid container>
                            <Grid item sm={3}>
                                <Typography variant="h6">
                                    Name:
                                </Typography>
                                <Typography variant="subtitle1">
                                    {item.task_name}
                                </Typography>
                            </Grid>
                            <Grid item sm={3}>
                                <Typography variant="h6">
                                    Description:
                                </Typography>
                                <Typography variant="subtitle1">
                                    {item.task_description}
                                </Typography>
                            </Grid>
                            <Grid item sm={3}>
                                <Typography variant="h6">
                                    Creator:
                                </Typography>
                                <Typography variant="subtitle1">
                                    {item.creator}
                                </Typography>
                            </Grid>
                            <Grid item sm={3}>
                                <Typography variant="h6">
                                    Duration:
                                </Typography>
                                <Typography variant="subtitle1">
                                    {item.duration}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ))}
        </Fragment>
    );
};

export default TaskList;