import app from './src/app'

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});
