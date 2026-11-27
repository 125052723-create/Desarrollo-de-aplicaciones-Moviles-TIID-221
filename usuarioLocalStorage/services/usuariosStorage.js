const clave = 'usuarios';

function leerUsuarios() {
  const datos = window.localStorage.getItem(clave);

  if (datos === null) {
    return [];
  }

  let usuarios;
  try {
    usuarios = JSON.parse(datos);
  } catch {
    throw new Error('No se pudieron leer los usuarios guardados: los datos estan dañados');
  }

  if (
    !Array.isArray(usuarios) ||
    usuarios.some((usuario) => !usuario || typeof usuario.id !== 'string')
  ) {
    throw new Error('No se pudieron leer los usuarios guardados: el formato no es valido');
  }

  return usuarios;
}

function guardarUsuarios(usuarios) {
  window.localStorage.setItem(clave, JSON.stringify(usuarios));
}

function validarDatosUsuario(datos) {
  const nombre = typeof datos.nombre === 'string' ? datos.nombre.trim() : '';
  const edad = String(datos.edad ?? '').trim();

  if (!nombre) {
    throw new Error('Escribe el nombre del usuario');
  }

  if (isNaN(edad)) {
    throw new Error('La edad debe ser un número entero');
  }

  return { nombre, edad: Number(edad) };
}

export async function obtenerUsuarios() {
  return leerUsuarios();
}

export async function crearUsuario(datos) {
  const usuarios = leerUsuarios();
  const usuario = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    ...validarDatosUsuario(datos),
  };

  guardarUsuarios([...usuarios, usuario]);
  return usuario;
}

export async function actualizarUsuario(id, datos) {
  const usuarios = leerUsuarios();
  const indice = usuarios.findIndex((usuario) => usuario.id === id);

  if (indice === -1) {
    throw new Error('El usuario que intentas actualizar ya no existe');
  }

  const usuarioActualizado = {
    ...usuarios[indice],
    ...validarDatosUsuario(datos),
  };
  usuarios[indice] = usuarioActualizado;
  guardarUsuarios(usuarios);

  return usuarioActualizado;
}

export async function eliminarUsuario(id) {
  const usuarios = leerUsuarios();
  const usuariosFiltrados = usuarios.filter((usuario) => usuario.id !== id);

  if (usuariosFiltrados.length === usuarios.length) {
    throw new Error('El usuario que intentas eliminar ya no existe');
  }

  guardarUsuarios(usuariosFiltrados);
}
