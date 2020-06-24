# Instalação para desenvolvimento(Ubuntu 20.04)

## Metodo
Estamos usando React-native CLI para rodar o projeto

## Instalação das ferramentas
Primeiro passo é preparação do ambiente para rodar tudo, então siga as instruções na documentação. É interessante testar em um projeto vazio e só depois que tiver certeza que está tudo funcionando na sua maquina partir para usar esse projeto.

### Documentação oficial
https://reactnative.dev/docs/environment-setup

### Documentação de instalação alternativa da rocketseat
https://react-native.rocketseat.dev/



### clone o projeto na maquina

```
git clone https://github.com/denisluciano30/AirGarage
```

## Permissão para gradlew
Possivelmente será necessário dar permissão para gradlew, então

```
chmod 755 android/gradlew
```

## Em terminais distintos com emulador já aberto rode (A porta é especificada pois são dois apps)

```
npx react-native start --port 8081
```

```
npx react-native run-android --port 8081
```


