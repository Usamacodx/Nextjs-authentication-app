import mongoose from 'mongoose';

export async function connect():Promise<void> {
    try {
        mongoose.connect("mongodb+srv://usama:Pa2Sl2JoA9XMgyc5@cluster1.hu5bj.mongodb.net/");


        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}


//