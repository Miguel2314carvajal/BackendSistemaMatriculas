estos son algunas mejoras
<div className="flex items-center justify-end space-x-2">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    {clienteEditar ? 'Actualizar' : 'Guardar'}
                </button>
                <button
                    type="button"
                    onClick={() => setMostrarFormulario(false)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Cancelar
                </button>
            </div>
        </form>
en el front-dist 
nmp run build
_redirects
