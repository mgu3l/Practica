<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="{{ asset('./css/app.css') }}"> 
    </head>
    <body>
        <div id="app">
            <v-app app>
                <app></app>
            </v-app>
        </div>
    </body>
    <script src="{{ asset('./js/app.js') }}"></script>    
</html>
