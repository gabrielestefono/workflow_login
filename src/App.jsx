export function App() {
  return (
    <div className="container">
      <header className="header">
        <img src="" alt="" />
        <span>Merci d'entrer vos informations de connexion</span>
      </header>
      <form>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" name="email" id="email" placeholder="johndoe@gmail.com"/>
        </div>
        <div>
          <label htmlFor="passe">Mot de passe</label>
          <input type="text" name="passe" id="passe" placeholder="********************"/>
        </div>
          <a href="">Mot de passe oublié ?</a>
          <button type="submit">Se connecter <img src="" alt="" /></button>
        <div className="footer">
          <p>Vous n’avez pas de compte ? <a href="#">Créer un compte</a></p>
        </div>
      </form>
    </div>
  )
}
